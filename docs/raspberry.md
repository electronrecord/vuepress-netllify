# Raspberry Pi

## CLI command to start camera

sudo modprobe bcm2835-v4l2


## Run command at startup

You should add it to /etc/modules.

ex: add this 'bcm2835-v4l' to the modules file

or

Just add the command to /etc/rc.local file


## CSI port - camera - hdmi input

To start the camera from terminal use

raspivid -t 0

-t 0 is for no record
-n is for not showing the window
-w 400 -h 400 for dimensions
-f full screen

## Streaming Live to YouTube and Facebook using Raspberry Pi Camera

[Streaming Live to YouTube and Facebook using Raspberry Pi Camera](https://www.digikey.com/en/maker/blogs/streaming-live-to-youtube-and-facebook-using-raspberry-pi-camera)

## Accessing the Raspberry Pi Camera with OpenCV and Python

[Accessing the Raspberry Pi Camera with OpenCV and Python](https://www.pyimagesearch.com/2015/03/30/accessing-the-raspberry-pi-camera-with-opencv-and-python/)

