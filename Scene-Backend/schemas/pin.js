export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about', // About section of the pin
            title: 'About',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'category', // Category of the pin
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',  // Image of pin
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,   // Hotspot enable a ui for selecting what areas should or should not be cropped - responsively adapt images 
            },
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{type: 'save'}], // Array is of type save
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comment'}],  // Array is of type comment
        },
    ],
};