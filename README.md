# React Standalone Boilerplate
<http://react.toycu.net>
- You can create React Apps without a backend using this Standalone React Boilerplate.
- As a result, you can create Apps on any device that has a text editor and a browser. 
- I would recommend this boilerplate for prototyping and small projects only. 
- The React Router and Bootstrap libraries are included. 
- However you can add other React libraries as well.

## Notice
- Babbel compiles JSX Code, if <script> Tags are provided with the type="text/babel" Attribute:
``` markdown 
  <script type="text/babel"></script>
```
- Since Babbel compiles in the Browser, you can execute the following Code in the Browser Console:
``` markdown 
  ReactDOM.render(App(), document.getElementById('root'));
```
- Be carefull when changing Script orders, because Scripts on the bottom depend on the Scripts at the top.
- You can use a CDN Server like <https://cdnjs.com> or <https://jsdelivr.com> instead of hosting vendor files yourself.
- You should switch the commented Script Dependencys in the index.html \<head> Tag with the uncommented ones in production mode.
``` markdown 
  <!-- Dependencies Production -->
  <!-- You can add more React Librarys here -->
  <!-- <script src="vendor/babel.min.js" crossorigin></script>
  <script src="vendor/react.production.min.js" crossorigin></script>
  <script src="vendor/react-dom.production.min.js" crossorigin></script>
  <script src="vendor/history.production.min.js" crossorigin></script>
  <script src="vendor/react-router.production.min.js" crossorigin></script>
  <script src="vendor/react-router-dom.production.min.js" crossorigin></script> -->
```
