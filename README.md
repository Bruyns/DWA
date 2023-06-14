# DWA
a collection of all DWA challenges given/done during Codespace course

## thoughts and ideas/brainstorming
### what should/can be abtracted in the code?
- make a function that automatically calls back each 
  ``` js
  const domFragments = (fragment) => {
    const frag = document.createdocumentfragment(fragment);
    // shortcut function used to replicate any DOM fragment by simply invoking the function and setting the const/var of the fragment inside the parameters
    if(!(fragment instanceof element | null)){
        throw new Error (`${fragment} is not defined anywhere in the script, please define`);
    }
    return frag;
  }

  export const domAppend = {
    preview: domFragments(starting)
  }
  ```
  - group together all DOMelement fragments that are used in the script 
  - group all the data-atrributes that are (querySelector)
    - group together each of the features that use the above method:
      - theme:
      - preview:
      - showmoreButton:
      - searchOverlay:
      - remainingAmount:
      - authorSearch:
      - genreSearch:
      - bookDescription:
  - put all the functions together