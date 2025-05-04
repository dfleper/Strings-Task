import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion

const Modal = ({ isOpen, onClose, stringMethod }) => {
  const [inputString, setInputString] = useState('Hola Mundo');
  const [result, setResult] = useState('');
  const [params, setParams] = useState({});

  const handleParamChange = (index, value) => {
    setParams(prev => ({ ...prev, [index]: value }));
  };

  const executeMethod = () => {
    try {
      const handler = new Function(`return ${stringMethod.handler}`)();
      const processedParams = stringMethod.parameters?.map((param, index) => {
        const value = params[index] ?? param.defaultValue ?? '';
        if (param.type === 'number') return parseInt(value) || 0;
        if (param.type === 'regex') return value.replace(/^\/|\/$/g, '');
        return value;
      }) || [];

      const methodResult = handler(inputString, processedParams);
      setResult(typeof methodResult === 'object'
        ? JSON.stringify(methodResult, null, 2)
        : String(methodResult));

    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-base-100 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-primary">
              string.{stringMethod.title}()
            </h2>
            <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </div>

          <div className="divider"></div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-base-content">{stringMethod.description}</p>
          </div>

          {stringMethod.example && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
              <div className="bg-neutral p-3 rounded-md overflow-x-auto">
                <pre className="text-neutral-content font-mono">
                  {stringMethod.example}
                </pre>
              </div>
            </div>
          )}

          <div className="mb-6 p-4 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">¡Pruébalo tú mismo!</h3>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Ingresa un texto:</span>
              </label>
              <input
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            {stringMethod.parameters?.length > 0 && (
              <div className={`grid gap-4 md:grid-cols-${stringMethod.parameters.length} my-4`}>
                {stringMethod.parameters.map((param, index) => (
                  <div key={index} className="form-control">
                    <label className="label">
                      <span className="label-text">{param.label}</span>
                    </label>
                    <input
                      type="text"
                      value={params[index] || ''}
                      onChange={(e) => handleParamChange(index, e.target.value)}
                      placeholder={param.placeholder}
                      className="input input-bordered"
                    />
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={executeMethod}
              className="btn btn-primary w-full mt-4"
            >
              Ejecutar Método
            </button>

            {result && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Resultado:</h4>
                <div className="bg-neutral p-4 rounded-md">
                  <pre className="text-neutral-content whitespace-pre-wrap break-words">
                    {result}
                  </pre>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button onClick={onClose} className="btn btn-ghost">
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;