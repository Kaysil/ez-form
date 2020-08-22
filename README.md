# EZ-FormAPI
FormAPI for ElementZero written in JavaScript

<hr>

## API:
###  NormalForm:

- Example:
```
import { send } from "ez:formui";
import { NormalForm } from "path/to/NormalForm.js";

var Form = new NormalForm()

Form
    .setTitle("FormAPI")
    .setContent("Content")
    .addButton("Close")

    send(player, Form.form, callback
```
### CustomForm:

- ...

### ModalForm:

- ...