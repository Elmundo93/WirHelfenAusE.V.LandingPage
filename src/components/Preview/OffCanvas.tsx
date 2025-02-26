'use client'

import React, { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'



interface OffCanvasProps {
  isOpen: boolean
  onClose: () => void
  onLinkClick: (target: string, offset: number) => void
  canvasText: ReactNode
  steps: { label: string; text: string; step: string }[]
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  isOpen,
  onClose,
  onLinkClick,
  canvasText,
  steps,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={onClose}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />

          <div className="fixed inset-x-0 bottom-0 flex justify-center">
            <Transition 
              appear
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
              show={isOpen}
            >
              <div className="w-full max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl rounded-t-2xl overflow-y-auto bg-amber">
                  <div className="p-4 flex justify-between items-center border-b">
                    <p className="text-lg font-medium text-gray-900">
                      {canvasText}
                    </p>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <span className="sr-only">Schließen</span>
                      &#10005;
                    </button>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4 px-2 gap-4">
                      {steps.map((step, index) => (
                        <li key={index}>
                          <button
                            onClick={() => onLinkClick(`#guideStep${step.step}`, 50)}
                            className="text-left w-full"
                          >
                            <span className="font-semibold">{step.label}</span>
                            <br />
                            <span className="group relative cursor-pointer">
                              <span className="relative">
                                {step.text}
                                <span className="absolute left-0 bottom-[-18px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default OffCanvas