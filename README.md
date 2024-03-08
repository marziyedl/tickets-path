problem : tickets: [{source: 'Amsterdam', destination: 'Berlin'}, {source: 'Paris', destination: 'London'}, {source: 'London', destination: 'Amsterdam'}]

result: 'Paris, London, Amsterdam, Berlin'

Solution: If a source isn’t found  in another object destination it is start position
If a source is found In another abject destination it is in the middle of the path
so first the code separates the source and destination into array and
then finds the start position and finally adds the destination to the path

Run : tsc tickets.ts
