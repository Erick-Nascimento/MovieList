import { Link, useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import BackIcon from '../../../public/assets/back.png'
import MessageIcon from '../../../public/assets/message.png'
import ShrinkIcon from '../../../public/assets/shrink.png'
import FullScreenIcon from '../../../public/assets/fullscreen.png'
import PauseIcon from '../../../public/assets/pause.png'
import PlayIcon from '../../../public/assets/play.png'
import { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube'

function Movie(trailer) {
  let { state } = useLocation()
  const videoId = state.trailer.results[0].key
  const trailerLink = `https://www.youtube.com/watch?v=${videoId}`

  const [player, setPlayer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showControls, setShowControls] = useState(true)

  const playerRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'

    script.onload = () => {
      window.YT.ready(() => {
        setPlayer(createPlayer(videoId))
      })
    }

    document.body.appendChild(script)

    return () => {
      if (
        playerRef.current &&
        typeof playerRef.current.destroy === 'function'
      ) {
        playerRef.current.destroy()
      }
      document.body.removeChild(script)
    }
  }, [videoId])

  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(videoId)
    }
  }, [videoId])

  const createPlayer = (videoId) => {
    return new window.YT.Player('youtube-player', {
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        playsinline: 1,
        showinfo: 0, // Oculta o título do vídeo
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    })
  }

  const onPlayerReady = (event) => {
    playerRef.current = event.target
    event.target.playVideo()
  }

  const onPlayerStateChange = (event) => {
    // Se o vídeo estiver pausado, mostra os controles
    if (event.data === window.YT.PlayerState.PAUSED) {
      setShowControls(true)
    }
  }

  const togglePlay = () => {
    if (
      playerRef.current &&
      typeof playerRef.current.playVideo === 'function'
    ) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
      } else {
        playerRef.current.playVideo()
      }
      setIsPlaying(!isPlaying)
      setShowControls(true) // Mostra os controles ao clicar em play/pause
      resetTimeout() // Reinicia o timeout ao mostrar os controles
    }
  }

  const toggleFullscreen = () => {
    if (
      playerRef.current &&
      typeof playerRef.current.getIframe === 'function'
    ) {
      const iframe = playerRef.current.getIframe()
      if (!document.fullscreenElement) {
        iframe.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setShowControls(true) // Mostra os controles ao entrar/sair de fullscreen
      resetTimeout() // Reinicia o timeout ao mostrar os controles
    }
  }

  const handleMouseMove = () => {
    setShowControls(true) // Mostra os controles ao mover o mouse
    resetTimeout() // Reinicia o timeout ao mover o mouse
  }

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current) // Limpa o timeout anterior
    timeoutRef.current = setTimeout(() => {
      setShowControls(false) // Esconde os controles após 5 segundos
    }, 5000)
  }

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowControls(true) // Mostra os controles ao entrar na tela
      resetTimeout() // Reinicia o timeout ao entrar na tela
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div className="relative h-screen ">
      <div
        style={{ pointerEvents: 'none' }}
        ref={playerRef}
        id="youtube-player"
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>
      {showControls && (
        <>
          <div className="absolute top-16 left-16 z-10">
            <img
              src={BackIcon}
              className="cursor-pointer h-12 w-12"
              onClick={() => window.history.back()}
              alt="Voltar"
            />
          </div>
          <div className="absolute flex bottom-0 w-full justify-between z-10 p-16">
            {isPlaying ? (
              <img
                src={PauseIcon}
                alt="Pause"
                onClick={togglePlay}
                className="cursor-pointer w-7 h-7"
              />
            ) : (
              <img
                src={PlayIcon}
                alt="Play"
                onClick={togglePlay}
                className="cursor-pointer w-7 h-7"
              />
            )}

            {/*
            <button
              onClick={togglePlay}
              className="bg-white text-black px-4 py-2 rounded-md mr-2"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            */}

            <img
              src={FullScreenIcon}
              alt="Full-Screen"
              onClick={toggleFullscreen}
              className="cursor-pointer w-7 h-7"
            />

            {/*
            <button
              onClick={toggleFullscreen}
              className="bg-white text-black px-4 py-2 rounded-md mr-2"
            >
              Fullscreen
            </button>
            */}
          </div>
        </>
      )}
    </div>
  )
}

export default Movie
