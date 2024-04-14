import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
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
      //add regex validation for email

      validation: (rule) =>
        rule.required() &&
        rule.custom((email) => {
          if (
            !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ) {
            return 'Please enter a valid email address'
          }
          return true
        }),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hashtags',
      title: 'Hashtags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }],
    }),
  ],
})
