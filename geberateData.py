import os
import json

base_folder = 'public/Resumes'
resume_data = []

for resume_type in os.listdir(base_folder):
    type_path = os.path.join(base_folder, resume_type)
    if not os.path.isdir(type_path):
        continue
    for year in os.listdir(type_path):
        year_path = os.path.join(type_path, year)
        if not os.path.isdir(year_path):
            continue
        for company in os.listdir(year_path):
            company_path = os.path.join(year_path, company)
            if not os.path.isdir(company_path):
                continue
            for resume in os.listdir(company_path):
                if resume.endswith('.pdf'):
                    resume_data.append({
                        "title": resume.replace(".pdf", ""),
                        "summary": f"Placed at {company} for {resume_type} role in {year}",
                        "file": f"resumes/{resume_type}/{year}/{company}/{resume}",
                        "type": resume_type,
                        "year": year,
                        "company": company
                    })

with open('public/resumeData.json', 'w') as f:
    json.dump(resume_data, f, indent=2)
