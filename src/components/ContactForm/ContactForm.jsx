import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
export const ContactForm = ({ addContact }) => {
  const onSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    };

    const isUnique = addContact(contact);
    if (isUnique) {
      actions.resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <Form autoComplete="off">
          <label>
            {' '}
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleChange}
              value={values.name}
            />
          </label>

          <label>
            Number:{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={handleChange}
              value={values.number}
            />
          </label>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
