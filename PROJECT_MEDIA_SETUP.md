# Portfolio media setup

Open `src/containers/Main.js` and update the `projectMedia` object near the top.

Each project supports:

- `live`: live demo URL
- `github`: GitHub URL
- `video`: YouTube/YouTube Shorts URL or direct MP4 URL
- `images`: array of imported local image files

Example:

```js
smartQueue: {
  live: "https://your-smartqueue-demo.com",
  github: "https://github.com/your-user/smartqueue",
  video: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  images: [
    require("../assets/images/SmartQueueDashboard.png"),
    require("../assets/images/SmartQueueQueue.png"),
  ],
},
```

For direct screenshots, place the files in `src/assets/images/` and import them with `require(...)`.

For video, YouTube links open inside the project viewer. Direct `.mp4` links can also be used after setting them as the `video` value.

Replace only URLs/media values; no UI changes are required.
