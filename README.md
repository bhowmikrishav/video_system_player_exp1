### Video Codec setting

```
    const mimeCodec = 'video/webm;codecs="vp9,opus"'
```

### Media Source object

```
    var mediaSource = new MediaSource()
```

### Set url for the video element

```
    video.src = window.URL.createObjectURL(mediaSource)
```

### Even Listener for `sourceopen` of MediaSource Object

**Source Buffer Mode to 'segment'**

```
    mediaSource.addEventListener('sourceopen', async () => {
        var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
        //Set Source Buffer Mode to 'segment'
        sourceBuffer.mode = 'segment';

        //No need for endOfStream when we set sourceBuffer.mode is set to 'segment'
        //mediaSource.endOfStream();
    })
```