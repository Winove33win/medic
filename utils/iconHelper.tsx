import React from 'react';
import {
  Heart, Stethoscope, Activity, Clock, Shield, Users, Phone, Mail, MapPin, Brain, Eye, Bone,
  CheckCircle, Star, Calendar, ArrowRight, ArrowLeft, Menu, X, FileText, GraduationCap, Languages
} from 'lucide-react';

export const getIconComponent = (iconName: string): React.ElementType => {
  const icons: { [key: string]: React.ElementType } = {
    Heart, Stethoscope, Activity, Clock, Shield, Users, Phone, Mail, MapPin, Brain, Eye, Bone,
    CheckCircle, Star, Calendar, ArrowRight, ArrowLeft, Menu, X, FileText, GraduationCap, Languages
  };

  return icons[iconName] || Clock;
};