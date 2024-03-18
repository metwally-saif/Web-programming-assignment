import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType( {
  name: 'comment',
  title: 'Comment',
  icon: UserIcon,
    type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'comment',
        title: 'Comment',
        type: 'text',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "hashtags",
        title: "Hashtags",
        type: "array",
        of: [{type: "string"}],
    })
  ]
})