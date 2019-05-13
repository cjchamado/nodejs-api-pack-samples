### Build your api base

#### Install `api-pack-mongoose`

```
$ yarn add @kolinalabs/api-pack-mongoose

```

#### Configure your models

```
// models/task.js

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  status: String,
  priority: Number,
  closed: Boolean,
  openedAt: Date,
  closedAt: Date
});

const Task = mongoose.model("Task", schema);

```

####
