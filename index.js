'use strict';

var extensions = {
  "": "unknown",

  ".jpg": "jpg",
  ".jpe": "jpg",
  ".jpeg": "jpg",
  ".jfif": "jpg",
  ".png": "png",
  ".gif": "gif",
  ".tiff": "tiff",
  ".svg": "svg",
  ".psd": "psd",
  ".ai": "ai",
  ".dwg": "dwg",

  ".iso": "iso",
  ".mdf": "mdf",
  ".nrg": "nrg",

  ".zip": "zip",
  ".7z": "7z",
  ".7zip": "7z",
  ".arj": "arj",
  ".rar": "rar",
  ".gz": "archive",
  ".gzip": "archive",
  ".bz2": "archive",
  ".bzip2": "archive",
  ".tar": "archive",

  ".xls": "xls",
  ".xlsx": "xls",
  ".doc": "doc",
  ".docx": "doc",
  ".ppt": "ppt",
  ".ppxt": "ppt",
  ".pdf": "pdf",
  ".rtf": "rtf",
  ".txt": "txt",
  ".md": "text",
  ".markdown": "text",

  ".avi": "avi",
  ".mp3": "mp3",
  ".mp4": "mp4",
  ".fla": "fla",

  ".css": "css",
  ".csv": "csv",
  ".html": "html",
  ".json": "json",
  ".js": "js",
  ".xml": "xml",

  ".dbf": "dbf",
  ".exe": "exe"
}

var unknown = extensions[''];

function getIcon(filename) {

  var array = filename.split('.');
  var ext = '.' + array[array.length - 1];
  
  var icon = ( ext in extensions ) ? extensions[ext] : extensions[unknown];

  return icon + '.svg';

}
