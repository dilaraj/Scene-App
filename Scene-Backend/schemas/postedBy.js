export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{type: 'user'}],  // Posted by references to the user schema
};