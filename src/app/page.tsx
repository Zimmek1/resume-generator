'use client';

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const [generated, setGenerated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateResume = () => {
    setGenerated(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume Generator</h1>
      {!generated ? (
        <div className="grid gap-4">
          <Input name="name" placeholder="Full Name" onChange={handleChange} />
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <Textarea name="summary" placeholder="Professional Summary" onChange={handleChange} />
          <Textarea name="experience" placeholder="Work Experience" onChange={handleChange} />
          <Textarea name="education" placeholder="Education" onChange={handleChange} />
          <Textarea name="skills" placeholder="Skills" onChange={handleChange} />
          <Button onClick={generateResume}>Generate Resume</Button>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Select a Resume Format</h2>

          {[1, 2, 3].map((template) => (
            <Card key={template} className="shadow-lg p-6 border">
              <CardContent>
                <h3 className="text-xl font-bold">{formData.name}</h3>
                <p className="text-sm">{formData.email} | {formData.phone}</p>
                <section className="mt-4">
                  <h4 className="font-semibold">Summary</h4>
                  <p>{formData.summary}</p>
                </section>
                <section className="mt-2">
                  <h4 className="font-semibold">Experience</h4>
                  <p>{formData.experience}</p>
                </section>
                <section className="mt-2">
                  <h4 className="font-semibold">Education</h4>
                  <p>{formData.education}</p>
                </section>
                <section className="mt-2">
                  <h4 className="font-semibold">Skills</h4>
                  <p>{formData.skills}</p>
                </section>
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" onClick={() => setGenerated(false)}>
            Back to Edit
          </Button>
        </div>
      )}
    </div>
  );
}
