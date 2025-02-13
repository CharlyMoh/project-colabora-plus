1. Colabora+
Justificación: Enfocado en la colaboración, el signo "+" le da un toque moderno, destacando la capacidad de trabajar en equipo dentro de la app.

2. Objetivo General y Descripción de la Aplicación
Objetivo General:
Desarrollar una aplicación móvil de gestión de proyectos personales que permita a los usuarios crear proyectos, agregar tareas, asignar tareas a otros usuarios, sincronizar eventos con Google Calendar, recibir notificaciones push sobre vencimientos y cambios de tareas, y colaborar en tiempo real con otros usuarios.
Descripción:
Colabora+ es una aplicación diseñada para ayudar a las personas a organizar sus proyectos personales y colaborativos. Con Colabora+, los usuarios pueden:
•	Crear proyectos, asignar tareas y controlar el progreso de cada tarea.
•	Sincronizar sus tareas con Google Calendar para recibir recordatorios y ver sus tareas en su calendario.
•	Recibir notificaciones push cuando una tarea se acerque a su vencimiento o cambie su estado.
•	Colaborar en proyectos en tiempo real con otros usuarios, asignando tareas, cambiando estados y actualizando el progreso compartido.
Características principales:
•	Gestión de proyectos: Crear, editar y eliminar proyectos.
•	Gestión de tareas: Crear tareas, asignarlas a diferentes miembros y cambiar su estado.
•	Integración con Google Calendar: Sincronizar tareas con el calendario de Google para recibir recordatorios.
•	Notificaciones push: Recordatorios automáticos sobre tareas pendientes o vencidas.
•	Colaboración: Permitir que varios usuarios colaboren en proyectos, asignando tareas y actualizando el estado.

3. Tipo de Arquitectura y Justificación
Arquitectura recomendada: Arquitectura Monolítica
La arquitectura monolítica es adecuada para el desarrollo de Colabora+, debido a la naturaleza de la aplicación y los requisitos de integración estrecha entre sus componentes. En una arquitectura monolítica, todos los componentes de la aplicación, como el modelo, la vista y el controlador, residen dentro de una única base de código y se ejecutan como una sola unidad. Este enfoque facilita la gestión y la implementación en etapas tempranas de desarrollo, ya que no requiere una separación compleja entre servicios.
Justificación:
•	Simplicidad en el Desarrollo Inicial: Una arquitectura monolítica simplifica la estructura del proyecto, ya que todos los módulos se encuentran en el mismo repositorio y proceso de ejecución, lo que permite un desarrollo más ágil y directo durante las fases iniciales.
•	Facilidad de Implementación y Despliegue: Al ser una única aplicación, el proceso de despliegue es directo, sin la necesidad de gestionar varios servicios independientes o microservicios. Esto reduce la sobrecarga operativa y permite un ciclo de despliegue más rápido.
•	Integración de Componentes: Dado que Colabora+ requiere una fuerte integración entre la interfaz de usuario, la gestión de proyectos y las funcionalidades colaborativas en tiempo real, la arquitectura monolítica asegura que todos estos componentes estén estrechamente acoplados y puedan interactuar fácilmente sin la necesidad de manejar complejas interacciones entre servicios independientes.
•	Escalabilidad Vertical: A medida que el proyecto crezca, la arquitectura monolítica puede escalar de manera eficiente en términos de rendimiento, aumentando los recursos (como CPU y memoria) del servidor donde se ejecuta la aplicación. Además, la integración con servicios externos como Google Calendar y notificaciones push se puede manejar centralizadamente sin complicar la estructura.

4. Framework Seleccionado para Desarrollo
•	Framework: React Native
Justificación: React Native es ideal para desarrollar aplicaciones móviles multiplataforma (iOS y Android) usando JavaScript y React. La integración con MongoDB es eficiente a través de bibliotecas como mongoose o el uso de MongoDB Atlas para gestionar la base de datos en la nube.
Ventajas:
•	Desarrollo multiplataforma con un solo código base.
•	Acceso a APIs nativas para funcionalidades como notificaciones push.
•	Facilidad para integrar MongoDB y otras soluciones de backend.

5. Estrategia de Versionamiento
•	Sistema de Control de Versiones: Git (usando plataformas como GitHub o GitLab).
Estrategia:
•	Branching Model: Git Flow. 
o	master: Rama principal, con el código listo para producción.
o	Carlos_Manuel: Rama de desarrollo funcionalidades asignadas a Carlos.
o	Aldo_Misael: Rama de desarrollo funcionalidades asignadas a Aldo.

6. Wireframes/Mockups de la Aplicación
Diseños realizados en figma
https://www.figma.com/proto/s27EcFeyDyLU0SUeH9OJj6/Untitled?node-id=0-1&t=kHrkd3HiTxlMrau5-1

7. Diagrama de Flujo de la Aplicación
![image](https://github.com/user-attachments/assets/67605f12-f6fb-4110-9762-7e71a396989c)



