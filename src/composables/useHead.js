import { onBeforeUnmount, watchEffect } from "vue";

export function useHead(input) {
  const touchedMetaKeys = new Set();

  watchEffect(() => {
    const resolved = typeof input === "function" ? input() : input;

    if (resolved.title) {
      document.title = resolved.title;
    }

    for (const meta of resolved.meta ?? []) {
      const selector = `meta[name="${meta.name}"]`;
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.name = meta.name;
        document.head.appendChild(element);
      }

      element.content = meta.content;
      touchedMetaKeys.add(meta.name);
    }
  });

  onBeforeUnmount(() => {
    touchedMetaKeys.forEach((name) => {
      const element = document.head.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.remove();
      }
    });
  });
}
