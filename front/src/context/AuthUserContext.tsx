import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom'; // Suponiendo que estás utilizando React Router para el enrutamiento

// Creamos un contexto para manejar la autenticación
const AuthContext = createContext<AuthContext>({
    user: null,
    load: false,
    setToken: () => {}
});

// Creamos un componente de proveedor para el contexto de autenticación
export const AuthProvider = ({ children  }:  { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('')
  const [load, setLoad] = useState<boolean>(false)
  const navigate = useNavigate ();

  // Función para cargar el usuario si ya está autenticado
  const loadUser = useCallback(async () => {
    setLoad(true)
    try {
      const response = await fetch('/api/user', 
        {
            method: "GET",
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Obtener el token de localStorage
            } 
        });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setUser(null);
        navigate('/login'); // Redirigir a la página de inicio de sesión si no está autenticado
      }
    } catch (error) {
      console.error('Error al cargar el usuario:', error);
      navigate('/login');
    } finally {
        setLoad(false)
    }
  },[navigate]);

  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setToken, load }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de autenticación
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
