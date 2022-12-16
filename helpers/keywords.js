const fs = require('fs');

const keywords = repos => {
  const keywords = repos
    .map(repo => repo.replace(/-/g, ' '))
    .reduce((acc, curr) => acc.concat(curr), [])
    .filter((keyword, index, self) => self.indexOf(keyword) === index)
    .sort((a, b) => a.localeCompare(b));
  // pipe the output to keywords.txt
  // create the file if it doesn't exist
  // append to the file if it does exist
  // fs.writeFileSync('keywords.txt', keywords.join('\n'), { flag: 'a' })

  return keywords;
};

// import repos from './repos not default
const { repos } = require('./repos');

console.log(keywords(repos));
