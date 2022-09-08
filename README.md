# task

task for Helix interview

My task is about Form Validation with writing javascript functionality code that must handle errors or success requests.

My form must have this parametrs`

```
full_name => "required|string|min:4|max:50",
email => "required|email",
address => "string",
notes => string|max:10000 // it should be a textarea
```

Then we must send our request in /form/fill action that should be return validation, global error or success result.

```
validation error
{
  "errors": {
    "first_name": "The field is required",
    "email": "The field is required"
  }
}

global error
{
  "message": "Something went wrong, please try again later."
}

success result
{
    "message": "Your appointment submitted successfully."
}
```


Validation error message should appear below the field.
Global error should return alert with this message.
When we have success we must hide our form and show success message.
