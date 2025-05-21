// src/components/RegisterForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AvatarCarousel from './ui/AvatarCarousel';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
};

const RegisterForm = () => {
  const [gender, setGender] = useState<'male' | 'female'>('female');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch 
  } = useForm<FormData>({
    defaultValues: {
      gender: 'female'
    }
  });
  
  const password = watch('password');
  
  const onSubmit = (data: FormData) => {
    // Aqui você pode enviar os dados para o backend
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nome */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            {...register('name', { 
              required: 'Nome é obrigatório',
              minLength: {
                value: 3,
                message: 'Nome deve ter no mínimo 3 caracteres'
              }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        
        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email', { 
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        {/* Senha */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Senha
          </label>
          <input
            id="password"
            type="password"
            className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            {...register('password', { 
              required: 'Senha é obrigatória',
              minLength: {
                value: 8,
                message: 'Senha deve ter no mínimo 8 caracteres'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial'
              }
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
        
        {/* Confirmar Senha */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirmar Senha
          </label>
          <input
            id="confirmPassword"
            type="password"
            className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            {...register('confirmPassword', { 
              required: 'Confirmação de senha é obrigatória',
              validate: value => value === password || 'As senhas não coincidem'
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>
        
        {/* Avatar Selection */}
        <AvatarCarousel 
          onGenderSelect={(selectedGender) => {
            setGender(selectedGender);
          }}
          initialGender={gender}
        />
        <input 
          type="hidden" 
          {...register('gender')} 
          value={gender} 
        />
        
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
