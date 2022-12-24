import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div className='app'>
      <CustomButton text="Düymə1" warnMessage="Düyməyə basıldı." hint='Düymənin izahına "ScreenTip" deyilir.'/>
      <CustomButton text="Düymə2" warnMessage="Düyməyə basıldı." hint='Düymənin izahına "ScreenTip" deyilir.'/>
      <CustomButton text="Düymə3" warnMessage="Düyməyə basıldı." hint='Düymənin izahına "ScreenTip" deyilir.'/>
    </div>
  );
}

export default App;