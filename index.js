import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <div dangerouslySetInnerHTML={{ __html: ReactMarkdown.render(markdown) }} />
        </div>
    );
}

export default MarkdownEditor;
function reverseAndCapitalize(sentence) {
    // Split the sentence into an array of words, reverse the array, then join the words back into a sentence
    const reversedSentence = sentence.split(' ').reverse().join(' ');

    // Split the sentence into an array of sentences, capitalize the first letter of each sentence, then join the sentences back into a paragraph
    const sentences = reversedSentence.split('. ');
    const capitalizedSentences = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));
    const paragraph = capitalizedSentences.join('. ');

    return paragraph;
}

console.log(reverseAndCapitalize('this is a test. hello world. how are you?'));
// Output: "You? Are how. World hello. Test a is this."
// Output: "How are you? Hello world. This is a test."
// Output: "You? Are how. World hello. Test a is this."
const data = [
    [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
    ],
    [
        { name: 'Bob', age: 40 },
        { name: 'Alice', age: 35 },
    ],
];

const names = data.flatMap((arr) => arr.map((obj) => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']
