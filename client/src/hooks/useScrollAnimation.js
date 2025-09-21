import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationType = 'fadeUp', options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Default animation options
    const defaultOptions = {
      duration: 1,
      ease: 'power2.out',
      delay: 0,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    // Set initial state based on animation type
    let fromState = {};
    let toState = {};

    switch (animationType) {
      case 'fadeUp':
        fromState = { opacity: 0, y: 50 };
        toState = { opacity: 1, y: 0 };
        break;
      case 'fadeDown':
        fromState = { opacity: 0, y: -50 };
        toState = { opacity: 1, y: 0 };
        break;
      case 'fadeLeft':
        fromState = { opacity: 0, x: -50 };
        toState = { opacity: 1, x: 0 };
        break;
      case 'fadeRight':
        fromState = { opacity: 0, x: 50 };
        toState = { opacity: 1, x: 0 };
        break;
      case 'fadeIn':
        fromState = { opacity: 0 };
        toState = { opacity: 1 };
        break;
      case 'scale':
        fromState = { opacity: 0, scale: 0.8 };
        toState = { opacity: 1, scale: 1 };
        break;
      default:
        fromState = { opacity: 0, y: 30 };
        toState = { opacity: 1, y: 0 };
    }

    // Set initial state
    gsap.set(element, fromState);

    // Create scroll trigger animation
    gsap.to(element, {
      ...toState,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
      delay: mergedOptions.delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        ...mergedOptions.scrollTrigger,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animationType, options]);

  return ref;
};

// Hook for staggered animations (for multiple elements)
export const useStaggerAnimation = (animationType = 'fadeUp', options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.children;
    if (!children.length) return;

    const defaultOptions = {
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    // Set initial state for all children
    let fromState = {};
    let toState = {};

    switch (animationType) {
      case 'fadeUp':
        fromState = { opacity: 0, y: 30 };
        toState = { opacity: 1, y: 0 };
        break;
      case 'fadeIn':
        fromState = { opacity: 0 };
        toState = { opacity: 1 };
        break;
      case 'scale':
        fromState = { opacity: 0, scale: 0.9 };
        toState = { opacity: 1, scale: 1 };
        break;
      default:
        fromState = { opacity: 0, y: 20 };
        toState = { opacity: 1, y: 0 };
    }

    gsap.set(children, fromState);

    // Create staggered animation
    gsap.to(children, {
      ...toState,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
      stagger: mergedOptions.stagger,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...mergedOptions.scrollTrigger,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [animationType, options]);

  return ref;
};