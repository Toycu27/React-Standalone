function About () {
    return (<>
        <h1>About</h1>
        <p>You can create React Apps without a backend using this Standalone React Boilerplate.
        As a result, you can create Apps on any device that has a text editor and a browser.
        I would recommend this boilerplate for prototyping and small projects only.
        The React Router and Bootstrap libraries are included. However you can add other React libraries as well.</p>
        <br />
        <h2>Notice</h2>
        <ul>
            <li>Babbel compiles JSX Code, if {'<script>'} Tags are provided with the type="text/babel" Attribute.</li>
            <li>Since Babbel compiles in the Browser, you can execute the following Code in the Browser Console: ReactDOM.render(App(), document.getElementById('root'));</li>
            <li>Be carefull when changing Script orders, because Scripts on the bottom depend on the Scripts at the top.</li>
            <li>You can use a CDN Server like <a href="https://cdnjs.com/">cdnjs.com</a> or <a href="https://www.jsdelivr.com/">jsdelivr.com</a> instead of hosting vendor files yourself.</li>
            <li>You should switch the commented Script Dependencys in the index.html {"<head>"} Tag with the uncommented ones in production mode.</li>
        </ul>
    </>);
}