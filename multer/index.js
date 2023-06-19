const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const multer = require("multer");

const app = express();
const uploadDir = path.join(process.cwd(), "uploads");
const storeImage = path.join(process.cwd(), "images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
  // limits: {
  //   fileSize: 1048576
  // }
});

const upload = multer({
  storage,
});

app.post("/upload", upload.single("picture"), async (req, res, next) => {
  const { description } = req.body;
  const { path: tempPathName, originalname, filename, mimetype } = req.file;
  const fileName = path.join(storeImage, filename);

  console.log(mimetype);

  try {
    // if (mimeType === 'image/png' || mimeType === 'image/jpeg') {}
    await fs.rename(tempPathName, fileName);
  } catch (err) {
    await fs.unlink(tempPathName);
    console.log(err);
  }

  res.json({
    description,
    message: "Plik załadowany pomyślnie",
    status: 200,
  });
});

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "You need to use /api route!",
    data: "Nothing found",
  });
});

app.use((err, _, res, __) => {
  console.error(err.stack);

  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

const folderAlreadyExist = (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

const createFolderIfNotExist = async (folderName) => {
  if (!(await folderAlreadyExist(folderName))) {
    await fs.mkdir(folderName);
  }
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  createFolderIfNotExist(uploadDir);
  createFolderIfNotExist(storeImage);
  console.log(`Server running on port ${PORT}`);
});

const ipList = [1, 2, 3, 4, 5];
