import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/routes'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { register } from 'swiper/element/bundle'
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Routes />
    </SkeletonTheme>
  </React.StrictMode>
)
