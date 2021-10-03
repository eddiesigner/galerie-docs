# Tables And Forms

If you ever need to add tables or form elements to the content of your articles, you can easily do so by using the **HTML card** that the editor provides. You can see a demo in the [Style Guide](https://galerie.eduardogomez.io/style-guide/).

## Tables

If you want to add a table, you should use HTML code similar to this one:

```html
<div class="g-table-container">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Heading</th>
        <th>Heading</th>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

The container with the class `g-table-container` is important, please do not forget about it.

## Form Elements

Galerie comes with styles for these form elements:

* Input text
* Textarea
* Select
* Checkbox
* Radio button

To add a **select** element correctly you should use a code like this one:

```html
<div class="g-select-container">
  <select name="select-example" id="select-example">
    <option value="1">First option</option>
    <option value="2">Second option</option>
    <option value="3">Third option</option>
  </select>
  <span class="icon-nav-arrow-down" aria-hidden="true"></span>
</div>
```

The container with the class `g-select-container` is important, as well as the `span` element with the class `icon-nav-arrow-down`.

To add a **checkbox** or a **radio button** element correctly you should use some code like this one:

```html
<!-- Checkbox -->
<label class="input-checkbox">
  <div>
    <input type="checkbox" name="checkbox-example" id="checkbox-example-1" value="1">
    <span></span>
  </div>
  Checkbox option
</label>

<!-- Radio button -->
<label class="input-radio">
  <div>
    <input type="radio" name="radio-example" id="radio-example-1" value="1">
    <span></span>
  </div>
  Input radio option
</label>
```

Please use an identical structure as shown in the examples, the class `input-checkbox` and `input-radio` matter. The tags `label`, `div` and `span` also matter and should remain in that order.

::: warning
The styles of tables and form elements only work in the body of a post or a regular page.
:::
