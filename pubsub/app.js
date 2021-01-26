import pubsub from './pubsub.mjs';

// Create a new PubSub
const events = pubsub();

// Register first subscriber
// Save the unsubscribe callback
const unSubOne = events.sub((a) => console.log('one: ' + a));

// Register second subscriber
const two = (a) => console.log('two: ' + a);
const unSubTwo = events.sub(two);

// Subscriber can be registred only once, the following has no effect
events.sub(two);
console.log(events);

// Dispatch a string
// `two` is called just once
events.pub('foo');
// "one: foo"
// "two: foo"

// Deregister a subscriber
// Returns true if the function has been removed successfully
unSubOne(); // true

// Dispatch a string
// `one` is not called
events.pub('bar');
// "two: bar"
