export default {
  name: 'subcategory',
  title: 'Podkategorije',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv podkategorije',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Opis podkategorije',
      type: 'text',
      rows: 3
    },
    {
      name: 'parentCategory',
      title: 'Glavna kategorija',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'isActive',
      title: 'Aktivna podkategorija',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'parentCategory.name',
      media: 'parentCategory.image'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Podkategorija od: ${subtitle}`
      };
    }
  }
}
