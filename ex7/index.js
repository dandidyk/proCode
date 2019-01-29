var compress_images = require('compress-images'), INPUT_PATH, OUTPUT_PATH;
 
INPUT_PATH = 'images/src/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
OUTPUT_PATH = 'images/build/';

compress_images(INPUT_PATH, OUTPUT_PATH, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                            {png: {engine: 'pngquant', command: ['--quality=60-85']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
            console.log('-------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('-------------');                                   
});