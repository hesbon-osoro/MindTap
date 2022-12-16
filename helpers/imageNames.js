const fs = require('fs');

const imageNames = repos => {
  const imgNames = repos.map(repo => {
    const imageName = repo.replace(/-/g, '').toLowerCase();
    return imageName;
  });
  // pipe image names to imageNames.txt
  // const imageNamesStream = fs.createWriteStream('imageNames.txt');
  // imageNamesStream.write(imgNames.join('\n'));
  return imgNames;
};

const { repos } = require('./repos');

console.log(imageNames(repos));
