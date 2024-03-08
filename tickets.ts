// tickets: [{source: 'Amsterdam', destination: 'Berlin'}, {source: 'Paris', destination:
// 'London'}, {source: 'London', destination: 'Amsterdam'}]
// result: 'Paris, London, Amsterdam, Berlin'

// Solution: If a source isn’t found  in another object destination it is start position
// If a source is found In another abject destination it is in the middle of the path
// so first the code separates the source and destination into array and
// then finds the start position and finally adds the destination to the path

interface Ticket {
  source: string;
  destination: string;
}

function findPathFromTickets(tickets: Ticket[]) {
  if (!tickets.length) return;
  if (IsInputTypeInvalid(tickets)) throw new Error("Invalid input");

  const destinations = getListOfItemByKey(tickets, "destination");
  const sources = getListOfItemByKey(tickets, "source");
  const firstPosition = findStartPosition(sources, destinations);

  let currentPosition = firstPosition;
  const route = [];
  while (currentPosition) {
    route.push(currentPosition);
    const nextIndex = sources.indexOf(currentPosition);
    currentPosition = destinations[nextIndex];
  }

  return convertArrayToString(route);
}

function IsInputTypeInvalid(input: Ticket[] = []) {
  return input.find((item) => !("source" in item) || !("destination" in item));
}

function getListOfItemByKey(tickets: Ticket[], key: string): string[] {
  return tickets.map((item) => item[key]);
}

function findStartPosition(sources: string[], destinations: string[]) {
  let startPosition: string;
  for (let i = 0; i < sources.length; i++) {
    if (!destinations.includes(sources[i])) {
      startPosition = sources[i];
      break;
    }
  }
  return startPosition;
}

function convertArrayToString(arr = []) {
  return arr.join(", ");
}

const tickets = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Paris", destination: "London" },
  { source: "London", destination: "Amsterdam" },
];

const result = findPathFromTickets(tickets);
console.log(result);

// test 2 : 
const tickets1 = [
  { source: "Tehran", destination: "Berlin" },
  { source: "Berlin", destination: "Hamburg" },
  { source: "Hamburg", destination: "kölln" },
  { source: "NoCity", destination: "NoCity2" },
];

const result1 = findPathFromTickets(tickets1);
console.log(result1);
