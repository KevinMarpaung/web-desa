"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ContentEditForm({ content, onSubmit }) {
  const [formData, setFormData] = useState(content.content || {});

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleArrayChange = (field, index, value) => {
    const array = [...formData[field]];
    array[index] = value;
    handleChange(field, array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...content,
      content: formData,
    });
  };

  // Render different form based on content type
  const renderForm = () => {
    switch (content.id) {
      case "hero":
      case "welcome":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Judul</Label>
              <Input
                id="title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Masukkan deskripsi"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Gambar</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  value={formData.image || ""}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="URL gambar"
                />
                <Button type="button" variant="outline">
                  Pilih Gambar
                </Button>
              </div>
              {formData.image && (
                <div className="mt-2">
                  <img
                    src={formData.image || "/placeholder.svg"}
                    alt="Preview"
                    className="max-h-40 rounded-md object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case "services":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="services-title">Judul</Label>
              <Input
                id="services-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label>Layanan</Label>
              <div className="border rounded-md p-4 space-y-4">
                {formData.services &&
                  formData.services.map((service, index) => (
                    <div
                      key={index}
                      className="grid gap-4 pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div className="space-y-2">
                        <Label htmlFor={`service-title-${index}`}>
                          Judul Layanan {index + 1}
                        </Label>
                        <Input
                          id={`service-title-${index}`}
                          value={service.title || ""}
                          onChange={(e) =>
                            handleArrayChange("services", index, {
                              ...service,
                              title: e.target.value,
                            })
                          }
                          placeholder="Masukkan judul layanan"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`service-desc-${index}`}>
                          Deskripsi Layanan {index + 1}
                        </Label>
                        <Textarea
                          id={`service-desc-${index}`}
                          value={service.description || ""}
                          onChange={(e) =>
                            handleArrayChange("services", index, {
                              ...service,
                              description: e.target.value,
                            })
                          }
                          placeholder="Masukkan deskripsi layanan"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-title">Judul</Label>
              <Input
                id="profile-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-description">Deskripsi Utama</Label>
              <Textarea
                id="profile-description"
                value={formData.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Masukkan deskripsi utama"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Detail</Label>
              <div className="border rounded-md p-4 space-y-4">
                {formData.details &&
                  formData.details.map((detail, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`detail-${index}`}>
                        Paragraf {index + 1}
                      </Label>
                      <Textarea
                        id={`detail-${index}`}
                        value={detail || ""}
                        onChange={(e) =>
                          handleArrayChange("details", index, e.target.value)
                        }
                        placeholder={`Masukkan paragraf ${index + 1}`}
                        rows={3}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-image">Gambar</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="profile-image"
                  value={formData.image || ""}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="URL gambar"
                />
                <Button type="button" variant="outline">
                  Pilih Gambar
                </Button>
              </div>
            </div>
          </div>
        );

      case "history":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="history-title">Judul</Label>
              <Input
                id="history-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label>Paragraf</Label>
              <div className="border rounded-md p-4 space-y-4">
                {formData.paragraphs &&
                  formData.paragraphs.map((paragraph, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`paragraph-${index}`}>
                        Paragraf {index + 1}
                      </Label>
                      <Textarea
                        id={`paragraph-${index}`}
                        value={paragraph || ""}
                        onChange={(e) =>
                          handleArrayChange("paragraphs", index, e.target.value)
                        }
                        placeholder={`Masukkan paragraf ${index + 1}`}
                        rows={3}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vision-title">Judul</Label>
              <Input
                id="vision-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vision-text">Visi</Label>
              <Textarea
                id="vision-text"
                value={formData.vision || ""}
                onChange={(e) => handleChange("vision", e.target.value)}
                placeholder="Masukkan visi"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Misi</Label>
              <div className="border rounded-md p-4 space-y-4">
                {formData.missions &&
                  formData.missions.map((mission, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`mission-${index}`}>
                        Misi {index + 1}
                      </Label>
                      <Textarea
                        id={`mission-${index}`}
                        value={mission || ""}
                        onChange={(e) =>
                          handleArrayChange("missions", index, e.target.value)
                        }
                        placeholder={`Masukkan misi ${index + 1}`}
                        rows={2}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "address":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address-title">Judul</Label>
              <Input
                id="address-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-text">Alamat</Label>
              <Textarea
                id="address-text"
                value={formData.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Masukkan alamat lengkap"
                rows={3}
              />
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-title">Judul</Label>
              <Input
                id="contact-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Telepon</Label>
                <Input
                  id="contact-phone"
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-emergency">Darurat</Label>
                <Input
                  id="contact-emergency"
                  value={formData.emergency || ""}
                  onChange={(e) => handleChange("emergency", e.target.value)}
                  placeholder="Masukkan nomor darurat"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-fax">Fax</Label>
              <Input
                id="contact-fax"
                value={formData.fax || ""}
                onChange={(e) => handleChange("fax", e.target.value)}
                placeholder="Masukkan nomor fax"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-info">Email Info</Label>
                  <Input
                    id="email-info"
                    value={formData.email?.info || ""}
                    onChange={(e) =>
                      handleChange("email", {
                        ...formData.email,
                        info: e.target.value,
                      })
                    }
                    placeholder="Masukkan email info"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-service">Email Layanan</Label>
                  <Input
                    id="email-service"
                    value={formData.email?.service || ""}
                    onChange={(e) =>
                      handleChange("email", {
                        ...formData.email,
                        service: e.target.value,
                      })
                    }
                    placeholder="Masukkan email layanan"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-complaint">Email Pengaduan</Label>
                  <Input
                    id="email-complaint"
                    value={formData.email?.complaint || ""}
                    onChange={(e) =>
                      handleChange("email", {
                        ...formData.email,
                        complaint: e.target.value,
                      })
                    }
                    placeholder="Masukkan email pengaduan"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "hours":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hours-title">Judul</Label>
              <Input
                id="hours-title"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Masukkan judul"
              />
            </div>
            <div className="space-y-2">
              <Label>Jam Operasional</Label>
              <div className="border rounded-md p-4 space-y-4">
                {formData.hours &&
                  formData.hours.map((hour, index) => (
                    <div
                      key={index}
                      className="grid gap-4 md:grid-cols-2 pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div className="space-y-2">
                        <Label htmlFor={`hours-day-${index}`}>Hari</Label>
                        <Input
                          id={`hours-day-${index}`}
                          value={hour.day || ""}
                          onChange={(e) =>
                            handleArrayChange("hours", index, {
                              ...hour,
                              day: e.target.value,
                            })
                          }
                          placeholder="Masukkan hari"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`hours-time-${index}`}>Waktu</Label>
                        <Input
                          id={`hours-time-${index}`}
                          value={hour.time || ""}
                          onChange={(e) =>
                            handleArrayChange("hours", index, {
                              ...hour,
                              time: e.target.value,
                            })
                          }
                          placeholder="Masukkan waktu"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Tidak ada form yang tersedia untuk konten ini.
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="edit">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Pratinjau</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="space-y-6 pt-4">
          {renderForm()}
        </TabsContent>
        <TabsContent value="preview" className="pt-4">
          <div className="border rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Pratinjau Konten</h3>
            <div className="prose max-w-none">
              {/* This would be a more sophisticated preview in a real application */}
              <pre className="text-sm bg-gray-100 p-4 rounded-md overflow-auto">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => onSubmit(null)}>
          Batal
        </Button>
        <Button type="submit">Simpan Perubahan</Button>
      </div>
    </form>
  );
}
