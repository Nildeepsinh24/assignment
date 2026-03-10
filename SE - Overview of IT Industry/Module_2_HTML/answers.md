# Module 2: HTML Assignment

## Define the terms: Website, Webpage, Web browser, Web server, HTML, CSS
- **Website**: A collection of publicly accessible, interlinked Web pages that share a single domain name. Websites can be created and maintained by an individual, group, business, or organization to serve a variety of purposes.
- **Webpage**: A document on the internet that can be accessed and displayed on a monitor or mobile device through a web browser. These pages contain information like text, colors, images, videos, and hyperlinks.
- **Web browser**: An application software used for accessing the World Wide Web. When a user requests a web page from a particular website, the web browser retrieves the necessary content from a web server and then displays the page on the user's device (e.g., Google Chrome, Mozilla Firefox, Safari).
- **Web server**: A computer system that uses HTTP (Hypertext Transfer Protocol) and other protocols to respond to client requests made over the World Wide Web. The main job of a web server is to display website content through storing, processing, and delivering webpages to users.
- **HTML**: Hypertext Markup Language. It is the standard markup language used to create the structure and presentation of web pages. It uses tags to annotate text, images, and other content for display in a web browser.
- **CSS**: Cascading Style Sheets. It is a style sheet language used to describe the presentation of a document written in HTML. CSS controls the layout, colors, fonts, and overall visual appearance of web pages independently of their structure.

## In how many ways can a CSS be integrated as a web page?
CSS can be integrated into a web page in three ways:

1. **Inline CSS**: The CSS is placed directly inside the HTML element using the `style` attribute. Useful for quick, single-element styling but not recommended for large-scale projects as it mixes content with presentation.
   ```html
   <p style="color: red; font-size: 14px;">This is a paragraph.</p>
   ```

2. **Internal CSS**: The CSS is placed within a `<style>` element situated in the `<head>` section of the HTML document. Useful when a single document has a unique style.
   ```html
   <head>
     <style>
       p { color: blue; }
     </style>
   </head>
   ```

3. **External CSS**: The CSS is placed in a separate `.css` file and is linked to the HTML document using the `<link>` tag within the `<head>` section. This is the most efficient and recommended way, especially for styling multiple pages consistently.
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```
