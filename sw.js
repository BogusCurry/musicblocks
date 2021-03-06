var CACHE_NAME = 'music-blocks-site-precache';
var urlsToCache = [
    'index.html',
    'loading-animation.gif',
    'manifest.json',
    'favicon.ico',

    'header-icons/a-button.svg',
    'header-icons/add.svg',
    'header-icons/apply.svg',
    'header-icons/b-button.svg',
    'header-icons/bigger-button.svg',
    'header-icons/cancel-button.svg',
    'header-icons/Cartesian-button.svg',
    'header-icons/clear-button.svg',
    'header-icons/close-button.svg',
    'header-icons/close-toolbar-button.svg',
    'header-icons/collapse-blocks-button.svg',
    'header-icons/compile-button.svg',
    'header-icons/delete.svg',
    'header-icons/download-button.svg',
    'header-icons/download.svg',
    'header-icons/down.svg',
    'header-icons/edit.svg',
    'header-icons/empty-trash-button.svg',
    'header-icons/erase-button.svg',
    'header-icons/export-button.svg',
    'header-icons/export-chunk.svg',
    'header-icons/export-drums.svg',
    'header-icons/fast-button.svg',
    'header-icons/fast-mouse-button.svg',
    'header-icons/fb-inactive.svg',
    'header-icons/filter.svg',
    'header-icons/filter+.svg',
    'header-icons/folder-open.svg',
    'header-icons/go-home-button.svg',
    'header-icons/go-home-faded-button.svg',
    'header-icons/grab.svg',
    'header-icons/help-button.svg',
    'header-icons/hide-blocks-button.svg',
    'header-icons/hide.svg',
    'header-icons/invert.svg',
    'header-icons/lilypond-button.svg',
    'header-icons/media-playback-pause-insensitive.svg',
    'header-icons/media-playback-pause.svg',
    'header-icons/media-playback-start-insensitive.svg',
    'header-icons/media-playback-start.svg',
    'header-icons/media-playlist-repeat-insensitive.svg',
    'header-icons/media-playlist-repeat.svg',
    'header-icons/menu-button.svg',
    'header-icons/myblocks-button.svg',
    'header-icons/next-button.svg',
    'header-icons/open-button.svg',
    'header-icons/open-toolbar-button.svg',
    'header-icons/oscillator.svg',
    'header-icons/palette-button.svg',
    'header-icons/paste-button.svg',
    'header-icons/paste-disabled-button.svg',
    'header-icons/pause-button.svg',
    'header-icons/planet-button.svg',
    'header-icons/play-button.svg',
    'header-icons/play-chord.svg',
    'header-icons/play-scale.svg',
    'header-icons/plugins-button.svg',
    'header-icons/polar-button.svg',
    'header-icons/popdown-palette-button.svg',
    'header-icons/popout.svg',
    'header-icons/publish.svg',
    'header-icons/restore-button.svg',
    'header-icons/restore-trash-button.svg',
    'header-icons/rotate-left.svg',
    'header-icons/rotate-right.svg',
    'header-icons/run-button.svg',
    'header-icons/samples-button.svg',
    'header-icons/save-block-artwork_backup.svg',
    'header-icons/save-block-artwork.svg',
    'header-icons/save-blocks-button.svg',
    'header-icons/save-button.svg',
    'header-icons/save-lilypond.svg',
    'header-icons/save-png-inactive.svg',
    'header-icons/save-png.svg',
    'header-icons/save-svg.svg',
    'header-icons/save-tb.svg',
    'header-icons/save-to-file-button.svg',
    'header-icons/scroll-lock-button.svg',
    'header-icons/scroll-unlock-button.svg',
    'header-icons/share.svg',
    'header-icons/show.svg',
    'header-icons/slow-button.svg',
    'header-icons/slow-music-button.svg',
    'header-icons/smaller-button.svg',
    'header-icons/sort.svg',
    'header-icons/stats-button.svg',
    'header-icons/step-button.svg',
    'header-icons/step-music-button.svg',
    'header-icons/stop-turtle-button.svg',
    'header-icons/synth.svg',
    'header-icons/tap-active-button.svg',
    'header-icons/tap-button.svg',
    'header-icons/turtle-button.svg',
    'header-icons/upload-planet.svg',
    'header-icons/up.svg',
    'header-icons/utility-button.svg',

    'images/bubbles.svg',
    'images/camera.svg',
    'images/Cartesian.svg',
    'images/cat.svg',
    'images/chine.svg',
    'images/clang.svg',
    'images/clap.svg',
    'images/close.svg',
    'images/collapse.svg',
    'images/cowbell.svg',
    'images/crash.svg',
    'images/cricket.svg',
    'images/cup.svg',
    'images/darbuka.svg',
    'images/dog.svg',
    'images/dupstack.svg',
    'images/emptybox.svg',
    'images/emptyheap.svg',
    'images/emptystart.svg',
    'images/expand.svg',
    'images/fingercymbals.svg',
    'images/floortom.svg',
    'images/go-down.svg',
    'images/go-up.svg',
    'images/help-container.svg',
    'images/hihat.svg',
    'images/icons.svg',
    'images/incompatible.svg',
    'images/kick.svg',
    'images/mouse2.svg',
    'images/mouse.svg',
    'images/negroot.svg',
    'images/nocode.svg',
    'images/noconnection.svg',
    'images/nofile.svg',
    'images/noinput.svg',
    'images/nojournal.svg',
    'images/nomedia.svg',
    'images/nomicrophone.svg',
    'images/nostack.svg',
    'images/notanumber.svg',
    'images/notastring.svg',
    'images/overflowerror.svg',
    'images/planetgraphic.png',
    'images/polar.svg',
    'images/ridebell.svg',
    'images/slap.svg',
    'images/snaredrum.svg',
    'images/splash.svg',
    'images/syntaxerror.svg',
    'images/synth2.svg',
    'images/synth.svg',
    'images/tom.svg',
    'images/trash.svg',
    'images/trianglebell.svg',
    'images/turtle2.svg',
    'images/turtle.svg',
    'images/video.svg',
    'images/voices.svg',
    'images/zerodivide.svg',

    'lib/domReady.js',
    'lib/require.js',

    'lib/reqwest.js',
    'lib/jquery-2.1.4.js',
    'lib/jquery-ui.js',
    'lib/webL10n.js',
    'lib/Tone.min.js',
    'lib/jquery.ruler.js',
    'lib/modernizr-2.6.2.min.js',
    'lib/easeljs-0.8.2.min.js',
    'lib/tweenjs-0.6.2.min.js',
    'lib/movieclip-0.7.1.min.js',

    'lib/preloadjs-0.6.2.min.js',
    'lib/howler.js',
    'lib/p5.min.js',
    'lib/p5.sound.min.js',
    'lib/p5.dom.min.js',
    'lib/mespeak.js',
    'lib/mespeak_config.json',
    'lib/voices/en/en.json',
    'lib/prefixfree.min.js',
    'lib/Chart.js',
    'lib/dsp.js',

    'css/activity.css',

    'js/detectIE.js',
    'js/pitchdrummatrix.js',
    'js/soundsamples.js',
    'js/activity.js',
    'js/launch.js',
    'js/pitchslider.js',
    'js/status.js',
    'js/analytics.js',
    'js/lilypond.js',
    'js/pitchstaircase.js',
    'js/timbre.js',
    'js/sugarizer-compatibility.js',
    'js/artwork.js',
    'js/loader.js',
    'js/pitchtimematrix.js',
    'js/tempo.js',
    'js/basicblocks.js',
    'js/logo.js',
    'js/platformstyle.js',
    'js/trash.js',
    'js/blockfactory.js',
    'js/macros.js',
    'js/pluginsviewer.js',
    'js/turtledefs.js',
    'js/block.js',
    'js/modewidget.js',
    'js/protoblocks.js',
    'js/turtle.js',
    'js/blocks.js',
    'js/munsell.js',
    'js/rhythmruler.js',
    'js/utilitybox.js',
    'js/boundary.js',
    'js/musicutils.js',
    'js/samplesviewer.js',
    'js/utils.js',
    'js/clearbox.js',
    'js/palette.js',
    'js/playbackbox.js',

    'lib/sugar-web/env.js',
    'lib/sugar-web/activity/activity.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
}); 
