const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const way = path.join(__dirname, 'secret-folder');

fs.promises.readdir(way, { withFileTypes: true }).then((files) =>
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(way, file.name);
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      fsPromises.stat(filePath).then((res) => {
        const fileSizeKB = (res.size / 1000).toFixed(3);

        console.log(
          `${fileName.replace(ext, '')} - ${ext.replace(
            '.',
            '',
          )} - ${fileSizeKB}kb`,
        );
      });
    }
  }),
);
