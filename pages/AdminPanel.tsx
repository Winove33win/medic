import React, { useState, useEffect } from 'react';
import { Page, Doctor } from '../types';
import { useDoctors } from '../context/DoctorContext';
import { Trash2, Edit, Plus, ArrowLeft, Save, X, LogOut } from 'lucide-react';

interface AdminPanelProps {
  onNavigate: (page: Page) => void;
  editingDoctorId: number | null;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigate, editingDoctorId }) => {
  const { doctors, addDoctor, updateDoctor, deleteDoctor, logout, isAdmin } = useDoctors();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Doctor>>({
    name: '',
    specialty: '',
    crm: '',
    image: '',
    bio: '',
    education: [],
    languages: [],
    availability: []
  });

  // Redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      onNavigate(Page.ADMIN_LOGIN);
    }
  }, [isAdmin, onNavigate]);

  // Load doctor if coming from "Edit" button
  useEffect(() => {
    if (editingDoctorId) {
      const doctor = doctors.find(d => d.id === editingDoctorId);
      if (doctor) {
        handleEdit(doctor);
      }
    }
  }, [editingDoctorId, doctors]);

  const handleEdit = (doctor: Doctor) => {
    setFormData(doctor);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleAddNew = () => {
    setFormData({
      name: '',
      specialty: '',
      crm: '',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=600',
      bio: '',
      education: [],
      languages: [],
      availability: []
    });
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.specialty) return;

    // Helper to split string by comma/newline to array if needed
    // For simplicity, we are assuming simple string inputs for now or handling in UI
    // In a real app, you'd have array inputs.
    
    if (formData.id) {
      updateDoctor(formData as Doctor);
    } else {
      addDoctor(formData as Doctor);
    }
    setIsEditing(false);
    setFormData({});
  };

  const handleArrayInput = (field: keyof Doctor, value: string) => {
    setFormData({ ...formData, [field]: value.split(',').map(s => s.trim()) });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
          <div className="flex space-x-4">
             <button onClick={() => onNavigate(Page.HOME)} className="text-gray-600 hover:text-gray-900 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Site
             </button>
             <button onClick={() => { logout(); onNavigate(Page.HOME); }} className="text-red-600 hover:text-red-800 flex items-center">
                <LogOut className="mr-2 h-4 w-4" /> Sair
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Form Section */}
        {isEditing ? (
          <div className="bg-white shadow rounded-lg p-6 mb-8 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {formData.id ? 'Editar Médico' : 'Novo Médico'}
              </h2>
              <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" required value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Especialidade</label>
                  <input type="text" required value={formData.specialty || ''} onChange={e => setFormData({...formData, specialty: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CRM</label>
                  <input type="text" required value={formData.crm || ''} onChange={e => setFormData({...formData, crm: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">URL da Foto</label>
                  <input type="text" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Biografia</label>
                <textarea rows={3} value={formData.bio || ''} onChange={e => setFormData({...formData, bio: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Formação (separar por vírgula)</label>
                  <input type="text" value={formData.education?.join(', ') || ''} onChange={e => handleArrayInput('education', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Idiomas (separar por vírgula)</label>
                  <input type="text" value={formData.languages?.join(', ') || ''} onChange={e => handleArrayInput('languages', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Disponibilidade (separar por vírgula)</label>
                  <input type="text" value={formData.availability?.join(', ') || ''} onChange={e => handleArrayInput('availability', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button type="button" onClick={() => setIsEditing(false)} className="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">Cancelar</button>
                <button type="submit" className="bg-primary-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-700 flex items-center">
                  <Save className="h-4 w-4 mr-2" /> Salvar
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex justify-end mb-6">
            <button onClick={handleAddNew} className="bg-primary-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-700 flex items-center">
              <Plus className="h-5 w-5 mr-2" /> Adicionar Médico
            </button>
          </div>
        )}

        {/* List Section */}
        <div className="bg-white shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-12 w-12 rounded-full object-cover" src={doctor.image} alt={doctor.name} />
                      </div>
                      <div className="ml-4">
                         <p className="font-medium text-primary-600 truncate">{doctor.name}</p>
                         <p className="text-gray-500 text-sm">{doctor.specialty} - {doctor.crm}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0 flex space-x-2">
                    <button onClick={() => handleEdit(doctor)} className="text-primary-600 hover:text-primary-900 bg-primary-50 p-2 rounded-full">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button onClick={() => { if(window.confirm('Tem certeza?')) deleteDoctor(doctor.id) }} className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-full">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
