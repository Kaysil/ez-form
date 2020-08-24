# EZ-FormAPI
FormAPI for ElementZero written in JavaScript

<hr>

## API:
###  NormalForm:

- Example:
```
import { send } from "ez:formui";
import { NormalForm } from "path/to/index.js";

var Form = new NormalForm()

Form
    .setTitle("FormAPI")
    .setContent("Content")
    .addButton("Close")

    send(player, Form.form, callback)
```
- Method:
    - setTitle(title: string)
    - setContent(content: string)
    - addButton(text: string)
    - addButtonWithImage(text: string, type: string, data: string)
        - type: path/url
        - data: path/url
    - deleteButton(id: number)
### CustomForm:

- ...

### ModalForm:

- ...
