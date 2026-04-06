// A placeholder data structure for exercises.

export interface Exercise {
  id: string;
  name: string;
  description: string;
  problem: string; // This could be markdown content
  starterCode: string;
}

export interface Topic {
  id: string;
  name: string;
  exercises: Exercise[];
}

export const topics: Topic[] = [
  {
    id: 'strings',
    name: 'Strings',
    exercises: [
      {
        id: 'reverse-a-string',
        name: 'Reverse a String',
        description: 'Write a function that reverses a string.',
        problem:
          '<p>Reverse the provided string.</p><p>You may need to turn the string into an array before you can reverse it.</p><p>Your result must be a string.</p>',
        starterCode: `function reverseString(str) {\n  return str;\n}`,
      },
    ],
  },
  {
    id: 'arrays',
    name: 'Arrays',
    exercises: [
      {
        id: 'sum-all-numbers',
        name: 'Sum All Numbers in a Range',
        description:
          "We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.",
        problem: '<p>The lowest number will not always come first.</p>',
        starterCode: `function sumAll(arr) {\n  return 1;\n}`,
      },
    ],
  },
];
