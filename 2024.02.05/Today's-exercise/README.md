# Querying and Traversing the DOM

Try to complete the following Tasks **using only JavaScript**.

You should **not write any CSS** during this exercise!

Feel free to check out the **Reference Image** at the end of this file to make sure your solution is working correctly.

---

## Task 1: Vulcans
Use a `document` method to select **all** elements with the class `vulcan`. Store these elements in a variable. 

Give each of the elements a border, which should be `3px` wide, ridged and have the color `orange`. The border should also have a radius of `5px`.

---

## Task 2: Captains
Use a `document` method to select the element with the class `captains`. Store this element in a variable. 

Give the element a border, which should be `1px` wide, solid and have the color `slategray`.

Now use an `Element` method, belonging to the `captains` element you just selected, to select all `<p>` elements which are its children. Store these child elements in a variable. **Note:** You should **not** use a `document` method here!

Give all of the `<p>` elements you just selected a background color of `palegoldenrod`.

---

## Task 3: Klingons
Use a `document` method to select the element with the class `klingons` **using a child (combinator) selector** (i.e. you should select this element as the child of another element). Store the element in a variable. 

Give the element a background color of `skyblue`.

---

## Task 4: Janeway
Use a `document` method **which you have not used yet in this exercise** to select the element with the id `janeway`. Store this element in a variable. 

Give the element the following styles:
- Change the element's font family to `Arial`
- Change the element's font size to 150% the size of the page's **root element** (look this unit of measurement up on Google if you need a refresher!)
- Give the element a border, which should be `2px` wide, dotted and have the color `firebrick`.

---

## Task 5: Mr. Spock
Use a `document` method to select the element with the class `spock`. Store it in a variable.

Now use an `Element` method (belonging to the `spock` element you just selected) to select the `spock` element's nearest ancestor which is a `div`. Store this `div` in a variable. **Note:** You should **not** use a `document` method here! 

Give the `div` you just selected a border, which should be `5px` wide, solid and have the color `fuchsia`.

---

## Task 6: Others
Use a `document` method to select the element with the class `others`. Store it in a variable.

Next use an `Element` method, belonging to the `others` element you just selected, to select all its descendants with the class `other`. Store these elements in a variable. **Note:** You should **not** use a `document` method here! 

Now check each of the elements you just selected to see if any of them have the class `seven`. 
- If an element has this class, give it a border, which should be `2px` wide, dashed, and have the color `tomato`.
- If an element does not have this class, change its font color to `darkgreen`, and its font style to `italic`.

---

## Task 7: Borg Queen
Create a new `<p>` element using the `document`'s **createElement** method. Store this element in a variable.
- Give the new element two classes: `other` and `borgQueen`.
- Give the new element some text: "Borg Queen".
- Add the new element to the DOM as a child of the `<div>` with the class `others`.
- Reload your HTML page to make sure the new element is displaying correctly.
- Also check your browser's console (using the Inspect tool), to make sure the new element has the correct classes.

---

## Task 8: Borg Queen 2 & Seven
Now remove the `borgQueen` class from the `borgQueen` element.
- Style the `borgQueen` element using **only JavaScript**. You should apply at least 4 different styles.
- Finally, try to use the `Element` method `removeChild()` to **remove** the `<p>` with the class `seven` from the DOM. **Hint:** You will need to call the method using the parent element of the element you want to remove. 
  - Feel free to research the `removeChild()` method if this would be helpful!

---

## Bonus

If you finish early, you should take the opportunity to refresh your CSS skills by improving the page's styling in whatever way you choose. 

Feel free to use CSS, JavaScript, or a combination of the two. :smile:

---

## Reference Image:

![Reference image](/assets/images/solution.png)