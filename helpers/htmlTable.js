const htmlTable = repos => {
  const githubusername = 'https://github.com/hesbon-osoro';
  const projecthost = 'https://hesbon-osoro.github.io';
  const table = repos
    .map(repo => {
      const name = repo.replace(/-/g, ' ');

      const github = `
                <a href="${githubusername}/${repo}">
                    <img
                        src="images/icons/github.png"
                        width="30px"
                        height="30px"
                        alt=''
                    />
                </a>
            `;
      const project = `
                <a href="${projecthost}/${repo}">
                    <img
                        width="300px"
                        src="images/projects/${repo
                          .replace(/-/g, '')
                          .toLowerCase()}.png"
                        alt="${name}"
                    />
                </a>
            `;
      const row = `
                <tr>
                    <td>
                        ${project}
                    </td>
                    <td>
                        <a href="${projecthost}/${repo}">
                            ${name}
                        </a>
                        <br />
                        <br />
                        ${github}
                    </td>
                </tr>
            `;
      return row;
    })
    .join('');
  const tbody = `
        <tbody>
            ${table}
        </tbody>
    `;
  const tableTag = `
        <table>
            ${tbody}
        </table>
    `;
  return tableTag;
};

// create the code using node fs
// to create the html file

const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'files', 'htmlTable.html');
const html = fs.readFileSync(htmlFile, 'utf-8');

const { repos } = require('./repos');

const table = htmlTable(repos);

const newHtml = html.replace('<table></table>', table);

// fs.writeFileSync(htmlFile, newHtml, 'utf-8');

// console.log(htmlTable(repos))

// implement the above code to create an html file useing ./repos names
// and save it to ./files/htmlTable.html
