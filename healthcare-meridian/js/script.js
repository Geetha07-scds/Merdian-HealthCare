// =====================================================
// MERIDIAN CLINIC — script.js
// Features: mobile nav toggle, FAQ accordion, appointment form validation
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // close all others
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Appointment form validation ---------- */
  var form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var fields = [
        { id: 'name', check: function (v) { return v.trim().length >= 2; }, msg: 'Please enter your full name.' },
        { id: 'email', check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, msg: 'Please enter a valid email address.' },
        { id: 'phone', check: function (v) { return /^[0-9+\-\s]{7,15}$/.test(v); }, msg: 'Please enter a valid phone number.' },
        { id: 'appt-date', check: function (v) { return v !== ''; }, msg: 'Please choose a preferred date.' },
        { id: 'department', check: function (v) { return v !== ''; }, msg: 'Please select a department.' }
      ];

      fields.forEach(function (f) {
        var input = document.getElementById(f.id);
        if (!input) return;
        var row = input.closest('.form-row');
        if (!f.check(input.value)) {
          row.classList.add('invalid');
          valid = false;
        } else {
          row.classList.remove('invalid');
        }
      });

      var successBox = document.getElementById('form-success');
      if (valid) {
        form.reset();
        if (successBox) {
          successBox.style.display = 'block';
          successBox.textContent = 'Your appointment request has been received. Our front desk will call to confirm a slot.';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (successBox) {
        successBox.style.display = 'none';
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
