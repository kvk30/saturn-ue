import React from 'react';

function MenuItem({ icon, text }) {
  return (
      <div className="flex items-center">
          <i className={`${icon} text-gray-600 text-lg mr-3`}></i>
          <span className="text-gray-800">{text}</span>
      </div>
  );
}

function App() 
 {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

            const toggleDropdown = () => {
                setDropdownOpen(!dropdownOpen);
            };
 return (
  <div className="flex h-screen bg-gray-100">
                <aside className="w-64 bg-white p-6 border-r flex flex-col justify-between">
                    <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center mt-4">
                            <i className="fas fa-pen mr-2"></i>
                            <span>Write Post</span>
                        </button>
                    <div className="space-y-4 mt-4">
                        <MenuItem icon="fas fa-plus" text="Post Generator" />
                        <MenuItem icon="fas fa-lightbulb" text="Ideas Generator" />
                        <MenuItem icon="fas fa-layer-group" text="Carousel Maker" />
                        <MenuItem icon="fas fa-clone" text="Posts" />
                        <MenuItem icon="fas fa-stream" text="Content Inspiration" />
                        <MenuItem icon="fas fa-user-friends" text="Posts for You" />
                        <MenuItem icon="fas fa-calendar-alt" text="Schedule" />
                        <MenuItem icon="fas fa-cog" text="Preferences" />
                        <MenuItem icon="fas fa-code-branch" text="Feature Request" />
                    </div>
                    </div>
                    <div className="mt-10 bg-gray-100 p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                            <span>Words generated<i className="fas fa-info-circle mr-1"></i> </span>
                            <span className="font-semibold">1.25k / 50k</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                            <div className="progress-bar"></div>
                        </div>
                        <div className="mt-2">Monthly usage resets in 29 days</div>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full w-full">
                            <i className="fas fa-arrow-up mr-2"></i> Upgrade Plan
                        </button>
                    </div>
                </aside>
                <main className="flex-1 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <div className="text-lg font-semibold">Write Post</div>
                        <div className="flex items-center space-x-4">
                            <button className="text-blue-500 font-semibold border-r border-gray-300 pr-4">Check Score</button>
                            <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40" alt="Profile picture placeholder" />
                        </div>
                        </div>
                        <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <button className="text-gray-500"><i className="fas fa-bold"></i></button>
                            <button className="text-gray-500"><i className="fas fa-italic"></i></button>
                            <button className="text-gray-500"><i className="fas fa-strikethrough"></i></button>
                            <div className="relative dropdown">
                                <button className="text-purple-500" onClick={toggleDropdown}><i className="fas fa-robot"></i></button>
                                <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 dropdown-menu ${dropdownOpen ? 'block' : 'hidden'}`}>
                                    <ul className="text-gray-700">
                                        <li className="px-4 py-2 hover:bg-gray-100">Complete</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Shorten</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Extend</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Rephrase</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Summarize</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">tl;dr</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Simplify</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Spelling & Grammar</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Emojify</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Tone of Voice</li>
                                        <li className="px-4 py-2 hover:bg-gray-100">Translate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="text-gray-500"><i className="fas fa-copy"></i></button>
                            <button className="text-gray-500"><i className="fas fa-image"></i></button>
                            <button className="text-gray-500"><i className="fas fa-file-alt"></i></button>
                        </div>
                    </div>
                    <div className="p-4">
                        <textarea className="w-full h-40 p-2 border border-gray-300 rounded" placeholder="Content creation is important for any online business. Not only does it help with creating and sharing various types of content to engage and grow a target audience, improve SEO, and drive traffic, but it also establishes authority and helps build brand awareness."></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                            <div className="text-gray-500">Last saved at Oct 4, 2023, 10:34 AM</div>
                            <div className="text-gray-500">254 characters</div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button className="text-gray-500 bg-white border border-gray-300 rounded py-2 px-4">Save as Draft</button>
                            <div className="flex items-center">
                                <button className="text-white bg-blue-500 rounded py-2 px-4 flex items-center mr-2">
                                    <span>Schedule</span>
                                    <i className="fas fa-calendar-alt ml-2"></i>
                                </button>
                                <button className="text-white bg-blue-600 rounded py-2 px-4 flex items-center">
                                    <span>Publish</span>
                                    <i className="fas fa-chevron-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
  </div>
            );
 }

export default App;


// //import logo from './logo.svg';
// //import './App.css';

// //function App() {
// //  return (
// //    <>
// //    <div className="App">
// //      <header className="App-header">
// //        <img src={logo} className="App-logo" alt="logo" />
// //        <p>
// //          Edit <code>src/App.js</code> and save to reload.
// //        </p>
// //        <a
// //          className="App-link"
// //          href="https://reactjs.org"
// //          target="_blank"
// //          rel="noopener noreferrer"
// //        >
// //          Learn React
// //        </a>
// //      </header>
// //    </div>
// //    </>
// //  );
// //}

// //export default App;
