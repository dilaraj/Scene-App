export default {
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'userId',  // Store the user ID of the user who saved the pin
            title: 'UserId',
            type: 'string',
        },
    ],
};