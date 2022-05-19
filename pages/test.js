import { useState } from 'react';

export default function Test() {
  const [testData, setTestData] = useState([]);

  const response = fetch('http://localhost:3000/idlookup/44196397');
}
