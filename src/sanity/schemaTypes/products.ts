const products = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                },
                {
                  name: 'colorImage',
                  title: 'Image',
                  type: 'array',
                  of:[{type: 'image'}]
                },
              ],
            },
          ],
        
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'sizes',
        title: 'Sizes and Prices',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'size',
                title: 'Size',
                type: 'string',
                options: {
                  list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'Large', value: 'large' },
                  ],
                },
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
              },
            ],
          },
        ],
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image'
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number'
      },
      {
        name: 'colors',
        type: 'array',
        title: 'Colors',
        of: [{type: 'string'}]
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
            source: 'title'
        }
      }
    ],
  };
  
  export default products