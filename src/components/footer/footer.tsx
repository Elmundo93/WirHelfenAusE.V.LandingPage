

import React from 'react'

import NavigationButton from './NavigationButton';


export default function Footer() {
  return (
    <footer>
      
    <div className="flex">

       
              <div className="text-sm px-6">
                <h6 className="text-gray-600 font-medium mb-1">Wir helfen aus e.V.</h6>
                <ul>
                  <li className="mb-1">
                    <NavigationButton text="37213 Witzenhausen" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="Ermschwerder Straße 6, z.H. Mrutschock" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="Gemeinnütziger Verein seit 2024" href="/" />
                  </li>
                </ul>
              </div>

         
              <div className="text-sm px-6">
                <h6 className="text-gray-600 font-medium mb-1">Nützliche Links</h6>
                <ul>
                  <li className="mb-1">
                    <NavigationButton text="Vector Design: vecteezy.com" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="www.Minijobzentrale.de" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="www.UnsereSazung.de" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="www.Jobanmelden.de" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="www.Wirhelfenause.V..de" href="/" />
                  </li>
                </ul>
              </div>

              
              <div className="text-sm px-6">
                <h6 className="text-gray-600 font-medium mb-1">Richtlinien und Datenschutz</h6>
                <ul>
                  <li className="mb-1">
                    <NavigationButton text="Unsere Vereinssatzung" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="Personalausweis Verifizierung" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="Kommunikationsrichtlinien" href="/" />
                  </li>
                  <li className="mb-1">
                    <NavigationButton text="Datenschutz" href="/" />
                  </li>
                </ul>
              </div>
              </div>
    

        

          <div className="md:flex md:items-center md:justify-between mb-5 mt-5">

     
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <NavigationButton text="Twitter" href="/" >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </NavigationButton>
              </li>
              <li className="ml-4">
                <NavigationButton text="Github" href="/" >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </NavigationButton>
              </li>
              <li className="ml-4">
                <NavigationButton text="Facebook" href="/" >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </NavigationButton>
              </li>
              <li className="ml-4">
                <NavigationButton text="Instagram" href="/" >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </NavigationButton>
              </li>
              <li className="ml-4">
                <NavigationButton text="Linkedin" href="/" >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </NavigationButton>
              </li>
            </ul>

          
            <div className="text-gray-400 text-sm mr-4">&copy; Wir helfen aus e.V.</div>

          </div>

    
    </footer>
    );
}