import 'antd/dist/reset.css';
import './App.css'
import { Layout } from './components/Layout'
import { NewsFeed } from './pages/NewsFeed'

function App() {
  return (
    <Layout>
      <NewsFeed />
    </Layout>
  )
}

export default App
